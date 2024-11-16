import Icon from "../icon"

export const defaultLinks = {
  home: { title: "Home", color: "#999", url: "/" },
  experience: {
    title: "Work Experience",
    color: "#444",
    url: "/experience",
    icon: Icon.MenuWorkExp,
  },
  projects: {
    title: "Hobby Projects",
    color: "#777",
    url: "/projects",
    icon: Icon.MenuHobby,
  },
  public: {
    title: "Public Perception",
    color: "#666",
    url: "/public",
    icon: Icon.MenuPublic,
  },
  music: {
    title: "Music Production",
    color: "#000",
    url: "https://martin.borik.net/",
    icon: Icon.MenuMusic,
  },
  aboutMe: {
    title: "Who am I?",
    color: "#999",
    url: "/about-me",
    icon: Icon.MenuAbout,
  },
}
