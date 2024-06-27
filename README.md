# ChicksWaterJug

The challenge involves using two jugs with different capacities (X gallons and Y gallons) to measure exactly Z gallons of water. Your application should have a user interface (UI) that displays the state changes of each jug (Empty, Full, or Partially Full) as it progresses towards the solution.
Goals

1. Problem Solving: Measure Z gallons of water using only the two jugs in the most efficient way possible.
2. User Interface Development: Create a UI where users can input any values for X, Y, and Z, and see the step-by-step solution. If a solution is not possible, the UI should display “No Solution”.

## Technologies Used

- **Angular CLI**: 15.2.9
- **Node.js**: 20.12.2

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/jeremyagnz/Chicks-WhaterJug.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Chicks-WhaterJug
    ```
3. Install Angular Material:
    ```bash
    ng add @angular/material
    ```
   Follow the prompts to choose a theme and set up global Angular Material typography and animations.

4. Install the dependencies:
    ```bash
    npm install
    ```

## Development Server

To run the application in development mode:
    ```bash
    ng serve
    ```
Navigate to \`http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Production Build

To create a production build:
1. Install Angular CLI GitHub Pages:
    ```bash
    npm install -g angular-cli-ghpages
    ```
2. Build the project with production configuration:
    ```bash
    ng build --configuration=production --base-href=/Chicks-WhaterJug/
    ```
3. Deploy the build to GitHub Pages:
    ```bash
    cd path/to/your/project/dist/Chicks-WhaterJug
    git init
    git add .
    git commit -m "commit"
    git remote add origin https://github.com/jeremyagnz/Chicks-WhaterJug.git
    git push origin HEAD:gh-pages
    ```
## Unit Test
  ```bash
    ng test --include=src/app/service/water-jug-logic.service.spec.ts
   ```
