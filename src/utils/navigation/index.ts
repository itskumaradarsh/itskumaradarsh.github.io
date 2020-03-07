import { createBrowserHistory } from 'history';
import { INavigation } from './interface';

export const reactRouterHistory = createBrowserHistory();

export const RouterNavigation: INavigation = {
  currentPath: (): string => {
    return reactRouterHistory.location.pathname;
  },

  navigateTo: path => {
    reactRouterHistory.push(path);
  },

  popAndNavigateTo: path => {
    reactRouterHistory.replace(path);
  },

  backward: () => {
    reactRouterHistory.goBack();
  },

  forward: () => {
    reactRouterHistory.goForward();
  },
};
