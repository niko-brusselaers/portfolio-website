import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  image = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
  content = "Hello, I'm Niko, a third-year student in Multimedia and Creative Technologies at EHB Brussels. I'm on a journey to become a full-stack developer, where I merge creativity and technology."
  hardSkills = [
  "HTML5",
  "CSS3",
  "PHP",
  "JavaScript",
  "React",
  "Typescript",
  "Angular",
  "TailwindCSS",
  "Git",
  "NodeJs",
  "Docker",
  "Laravel",
  "MySQL",
  "NoSQL",
  "MongoDB",
  "Framer-motion",
  "Jest",
  "Express",
  "react-router",
  ]
  softSkills = ["Teamwork", "Communication", "Problem-solving", "Adaptability"]
}
