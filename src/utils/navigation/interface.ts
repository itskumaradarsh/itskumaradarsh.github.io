export interface INavigation {
  currentPath(): string;

  /**
   * Navigate to the specified path
   *
   * @param path - the path to navigate to
   */
  navigateTo(path: string): void;

  /**
   * Navigate to the specified path and remove the previous path in the history of navigation.
   * Example of this usage is to prevent user to going back to login page when navigating back.
   *
   * @param path - the path to navigate to
   */
  popAndNavigateTo(path: string): void;

  forward(): void;

  backward(): void;
}
