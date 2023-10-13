import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  image = "https://picsum.photos/200/300"
  content = "Hello, I'm Niko, a third-year student in Multimedia and Creative Technologies at EHB Brussels. I'm on a journey to become a full-stack developer, where I merge creativity and technology."
  hardSkills = ["HTML5/CSS3, PHP", "Javascript, React(Typescript), TailwindCSS", "Git, NodeJs, Docker, Laravel", "MySQL, NoSQL, MongoDB", "Framer-motion, Jest, Express, react-router, MQTT", "Adobe XD, Photoshop, Illustrator, Premiere Pro, After Effects"]
  softSkills = ["Teamwork", "Communication", "Problem-solving", "Adaptability"]
}
