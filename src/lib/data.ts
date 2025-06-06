import { promises as fs } from 'fs';
import path from 'path';
import { PersonalInfo, Project, Skills, Experience } from '@/types';

const dataDirectory = path.join(process.cwd(), 'data');

export async function getPersonalInfo(): Promise<PersonalInfo> {
  const filePath = path.join(dataDirectory, 'personal.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getProjects(): Promise<Project[]> {
  const filePath = path.join(dataDirectory, 'projects.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter(project => project.featured);
}

export async function getSkills(): Promise<Skills> {
  const filePath = path.join(dataDirectory, 'skills.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getExperience(): Promise<Experience[]> {
  const filePath = path.join(dataDirectory, 'experience.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}
