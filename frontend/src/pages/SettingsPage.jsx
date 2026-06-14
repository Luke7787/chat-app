import { useThemeStore } from "../store/useThemeStore";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hello, how are you?", isSent: False }, 
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: True },
];

const SettingsPage = () => {
  const [theme, setTheme] = useThemeStore();
};

export default SettingsPage;
