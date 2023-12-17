import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  image = "./assets/images/profile_image.png"
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
  "Socket-io"
  ]
  softSkills = ["Teamwork", "Communication", "Problem-solving", "Adaptability"]
}
