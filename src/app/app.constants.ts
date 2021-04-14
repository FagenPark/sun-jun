import {ThemeOption} from './themeOption.model';

export const skillChartLabels = ['JavaScript/TypeScript', 'HTML', 'Angular', 'React', 'CSS', 'Node.js', '.Net'];
export const skillsData = [95, 90, 95, 80, 95, 80, 80];
export const themeOptions: ThemeOption[] = [
  {
    backgroundColor: '#303030',
    buttonColor: '#607d8b',
    headingColor: '#e91e63',
    label: 'Dark Theme',
    theme: 'dark',
    value: 'https://firebasestorage.googleapis.com/v0/b/sun-jun-adventure.appspot.com/o/css%2Fdark-theme.css?alt=media&token=dc6c021f-08de-495b-93f3-a322c00274d7'
  },
  {
    backgroundColor: '#fff',
    buttonColor: '#ffc107',
    headingColor: '#673ab7',
    label: 'Light Theme',
    theme: 'light',
    value: 'https://firebasestorage.googleapis.com/v0/b/sun-jun-adventure.appspot.com/o/css%2Flight-theme.css?alt=media&token=4ee3067b-fa87-436a-a003-9639bc02ae9c'
  }
];
