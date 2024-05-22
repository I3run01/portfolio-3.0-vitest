import { Skills } from ".";
import { renderWithProviders } from 'src/__test__/renderWithProviders.tsx';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { describe, it, beforeEach, vi } from "vitest";
import { SkillsService } from "./mocks/skillsServices";

// Properly mock the SkillsService methods
const mockGetSkills = vi.spyOn(SkillsService.prototype, 'getSkills');
const mockGetProjectsBySkill = vi.spyOn(SkillsService.prototype, 'getProjectsBySkill');

const mockSkillsData = JSON.stringify([
  { category: 'Frontend', skills: ['React', 'Vue'] },
  { category: 'Backend', skills: ['Node', 'Django'] },
]);

const mockProjectsData = JSON.stringify([
  { title: 'Project1', photo: 'project1.jpg' },
  { title: 'Project2', photo: 'project2.jpg' },
]);

describe('Skills Component', () => {
  beforeEach(() => {
    mockGetSkills.mockResolvedValue(mockSkillsData);
    mockGetProjectsBySkill.mockResolvedValue(mockProjectsData);
  });

  it('renders loading state initially', () => {
    renderWithProviders(<Skills />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders skills and projects data correctly', async () => {
    renderWithProviders(<Skills />);
    
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    const frontendSkills = screen.getByText('Frontend');
    expect(frontendSkills).toBeInTheDocument();

    const backendSkills = screen.getByText('Backend');
    expect(backendSkills).toBeInTheDocument();

    const firstSkill = screen.getByText('React');
    expect(firstSkill).toHaveClass('selectedSkill');

    await waitFor(() => {
      const projectImages = screen.getAllByRole('img');
      expect(projectImages.length).toBe(2);
      expect(projectImages[0]).toHaveAttribute('src', 'project1.jpg');
      expect(projectImages[1]).toHaveAttribute('src', 'project2.jpg');
    });
  });

  it('changes selected skill and fetches projects on skill click', async () => {
    renderWithProviders(<Skills />);
    
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    const nodeSkill = screen.getByText('Node');
    fireEvent.click(nodeSkill);

    await waitFor(() => {
      expect(mockGetProjectsBySkill).toHaveBeenCalledWith('Node');
    });

    await waitFor(() => {
      const projectImages = screen.getAllByRole('img');
      expect(projectImages.length).toBe(2);
      expect(projectImages[0]).toHaveAttribute('src', 'project1.jpg');
      expect(projectImages[1]).toHaveAttribute('src', 'project2.jpg');
    });
  });

  //TODO: check why this test in not passing
  // it('renders error message when skills fetch fails', async () => {
  //   mockGetSkills.mockRejectedValue(new Error('Failed to fetch skills'));

  //   renderWithProviders(<Skills />);

  //   await waitFor(() => {
  //     expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
  //     expect(screen.getByText('Error loading skills')).toBeInTheDocument();
  //   });
  // });
  
  // TODO: check why this test in not passing
  it('handles window resize to hide projects section on small screens', () => {
    renderWithProviders(<Skills />);

    const projectScreen = screen.queryByTestId('projects')

    expect(projectScreen).toBeInTheDocument();

    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));

    expect(projectScreen).not.toBeInTheDocument();
  });

  it('opens a new tab when a project is clicked', async () => {
    const originalOpen = window.open;
    window.open = vi.fn();

    renderWithProviders(<Skills />);

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    const project1 = screen.getByAltText('Project1');
    fireEvent.click(project1);

    expect(window.open).toHaveBeenCalledWith('project/Project1', '_blank');

    window.open = originalOpen;
  });
});
