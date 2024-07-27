
# Speech Lab v2 Project

Welcome to the Speech Lab v2 Project! This document serves as a guide to help you understand the project's structure, contribute effectively, and follow best practices.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Adding New Features](#adding-new-features)
5. [Feature Branching](#feature-branching)
6. [Reporting Bugs](#reporting-bugs)
7. [Tech Stack](#tech-stack)
8. [Best Practices](#best-practices)

## Project Overview

This project is an Angular-based Speech Lab v2. It features components for various user roles, including students, teachers, and admins. The application also includes features such as video conferencing, speech analysis, and a text-to-speech tool.

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Quanby-IT-Solutions/SpeechLab.git
   ```

2. **Install Dependencies**
   Always run `npm install` after pulling new changes to ensure all dependencies are up-to-date.
   ```bash
   npm install
   ```

3. **Start the Application**
   To run the application locally:
   ```bash
   ng serve --open
   ```

## Project Structure

The project is organized into the following main directories:

- **`core/`**: Singleton services, guards, interceptors, and layout components (header, footer, sidebar).
- **`shared/`**: Reusable components, directives, and pipes.
- **`features/`**: Modules organized by major functionalities or user roles, such as dashboards, course management, tasks, meetings, and specialized tools.
- **`auth/`**: Authentication-related components like login.

## Adding New Features

1. **Core Module (`core/`)**
   - **Services**: Add services in `core/services/`.
   - **Layout Components**: Add layout components in `core/layout/`.

2. **Shared Module (`shared/`)**
   - **Components**: Add reusable UI components in `shared/components/`.
   - **Directives**: Add custom directives in `shared/directives/`.
   - **Pipes**: Add reusable pipes in `shared/pipes/`.

3. **Feature Modules (`features/`)**
   - **New Components**: Place new components in the appropriate subdirectory under `features/`.
   - **New Modules**: If your feature doesn't fit into an existing category, create a new subdirectory under `features/`.

4. **Auth Module (`auth/`)**
   - **New Components**: Add authentication-related components in `auth/`.

## Feature Branching

Before starting any new work, create a feature branch. This helps in managing changes and code reviews.

1. **Creating a Feature Branch**
   - Always create a feature branch from the `main` branch:
     ```bash
     git checkout main
     git pull
     git checkout -b feature/your-feature-name
     ```

2. **Committing and Pushing Changes**
   - Commit your changes with clear messages:
     ```bash
     git add .
     git commit -m "Add new feature: description"
     ```
   - Push your feature branch:
     ```bash
     git push -u origin feature/your-feature-name
     ```

3. **Pull Request**
   - After completing your work, create a pull request to merge your feature branch into `main`. Include a clear description of the changes.

## Reporting Bugs

If you encounter any bugs, please report them by creating an issue on the GitHub repository. Include the following details:

1. A descriptive title.
2. Steps to reproduce the bug.
3. Expected vs. actual results.
4. Screenshots, if applicable.

## Tech Stack

- **Angular 17**
- **Tailwind CSS**

## Best Practices

1. **Modularity**: Keep components and services modular and reusable.
2. **Consistency**: Follow established naming conventions and organizational patterns.
3. **Documentation**: Document your components and services, including usage examples and any special considerations.
4. **Communication**: If you're unsure about something, don't hesitate to ask the team for guidance.