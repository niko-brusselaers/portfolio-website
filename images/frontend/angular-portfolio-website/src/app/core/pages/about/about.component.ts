import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  image = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
  content = "Hello, I'm Niko, a third-year student in Multimedia and Creative Technologies at EHB Brussels. I'm on a journey to become a full-stack developer, where I merge creativity and technology."
  hardSkills:{name: string, iconClassName: string}[] = [
  { name: "HTML5", iconClassName: "html5" },
  { name: "CSS3", iconClassName: "css3" },
  { name: "PHP", iconClassName: "php" },
  { name: "JavaScript", iconClassName: "javascript" },
  { name: "React", iconClassName: "react" },
  { name: "Typescript", iconClassName: "typescript" },
  { name: "TailwindCSS", iconClassName: "tailwindcss" },
  { name: "Git", iconClassName: "git" },
  { name: "NodeJs", iconClassName: "nodejs" },
  { name: "Docker", iconClassName: "docker" },
  { name: "Laravel", iconClassName: "laravel" },
  { name: "MySQL", iconClassName: "mysql" },
  { name: "NoSQL", iconClassName: "nosql" },
  { name: "MongoDB", iconClassName: "mongodb" },
  { name: "Framer-motion", iconClassName: "framer-motion" },
  { name: "Jest", iconClassName: "jest" },
  { name: "Express", iconClassName: "express" },
  { name: "react-router", iconClassName: "react-router" },
  { name: "Adobe XD", iconClassName: "adobe-xd" },
  { name: "Photoshop", iconClassName: "photoshop" },
  { name: "Illustrator", iconClassName: "illustrator" },
  { name: "Premiere Pro", iconClassName: "premiere-pro" },
  { name: "After Effects", iconClassName: "after-effects" },
  ]
  softSkills = ["Teamwork", "Communication", "Problem-solving", "Adaptability"]
}
