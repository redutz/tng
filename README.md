# TNG Project

## Overview
The TNG Project is a modern web application built using Flutter, showcasing the capabilities of Flutter for web development. This project demonstrates the integration of Flutter's web output with custom web technologies, including service workers for offline capabilities and advanced web APIs for a progressive web app (PWA) experience.

## Features
- **Progressive Web App (PWA)**: Utilizes service workers for offline support and a manifest for installability on supported devices.
- **Rich Interaction**: Leverages Flutter's powerful UI capabilities for rich, interactive user experiences.
- **Custom Assets**: Incorporates custom icons and a favicon for a cohesive brand identity across the application.

## Project Structure
- `assets/`: Contains images and other assets used by the web app.
- `canvaskit/`: Stores the CanvasKit library, an accelerated 2D and WebGL renderer for Flutter Web.
- `icons/`: Includes icons for various purposes, such as app icons for different platforms and resolutions.
- `favicon.png`: The website's favicon, displayed in the browser tab.
- `flutter.js`: The Flutter engine bootstrapping script that initializes the Flutter web runtime.
- `flutter_service_worker.js`: A service worker script for caching and offline capabilities.
- `index.html`: The entry point of the web application. It loads the necessary scripts and styles for the Flutter app.
- `main.dart.js`: The compiled Dart code as JavaScript, representing the core logic and UI of the Flutter web app.
- `manifest.json`: Provides metadata about the app, used by the browser to allow users to install the web app on their home screen.
- `version.json`: Contains version information about the web app, used for cache management and updates.

## Setup and Deployment
To set up and run the TNG Project locally, follow these steps:

1. Ensure you have Flutter installed on your system. If not, follow the [Flutter installation guide](https://flutter.dev/docs/get-started/install).
2. Clone the repository to your local machine.
    ```
    git clone https://github.com/redutz/tng.git
    ```
3. Navigate to the project directory.
    ```
    cd tng
    ```
4. Run the Flutter app in web mode.
    ```
    flutter run -d chrome
    ```
5. To build a production version of the app, use:
    ```
    flutter build web
    ```
6. Deploy the `build/web` directory to your preferred static hosting service.

## Contribution
Contributions to the TNG Project are welcome! Please feel free to report issues, suggest features, or submit pull requests. Ensure to follow the project's code of conduct and contribution guidelines.

## License
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). See the LICENSE file for more details.

## Acknowledgments
- Flutter, for providing the framework to build beautiful natively compiled applications from a single codebase.
- The web community, for resources and tools that facilitate web development.
