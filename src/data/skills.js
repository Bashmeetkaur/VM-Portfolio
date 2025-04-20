// import { FaCuttlefish, FaJava, FaPython, FaJs, FaHtml5, FaRProject, FaReact, FaNodeJs, FaFire, FaCode, FaPaintBrush, FaAndroid, FaGithub, FaTable, FaBrain, FaCodeBranch, FaChartBar, FaDatabase } from 'react-icons/fa';
// import { SiCplusplus } from 'react-icons/si'; // For C++

// export const skills = {
//   Languages: [
//     { name: 'C++', icon: SiCplusplus, proficiency: 'Intermediate' },
//     { name: 'Java', icon: FaJava, proficiency: 'Advanced' },
//     { name: 'Python', icon: FaPython, proficiency: 'Advanced' },
//     { name: 'JavaScript', icon: FaJs, proficiency: 'Advanced' },
//     { name: 'HTML/CSS', icon: FaHtml5, proficiency: 'Intermediate' },
//     { name: 'R', icon: FaRProject, proficiency: 'Beginner' },
//   ],
//   Frameworks: [
//     { name: 'React', icon: FaReact, proficiency: 'Advanced' },
//     { name: 'Express.js', icon: FaNodeJs, proficiency: 'Intermediate' },
//     { name: 'Node.js', icon: FaNodeJs, proficiency: 'Intermediate' },
//     { name: 'Django', icon: FaPython, proficiency: 'Beginner' },
//     { name: 'Redux', icon: FaReact, proficiency: 'Intermediate' },
//     { name: 'Firebase', icon: FaFire, proficiency: 'Intermediate' },
//   ],
//   Tools: [
//     { name: 'VS Code', icon: FaCode, proficiency: 'Advanced' },
//     { name: 'Qt Designer', icon: FaPaintBrush, proficiency: 'Intermediate' },
//     { name: 'Android Studio', icon: FaAndroid, proficiency: 'Intermediate' },
//     { name: 'GitHub', icon: FaGithub, proficiency: 'Advanced' },
//     { name: 'Excel', icon: FaTable, proficiency: 'Intermediate' },
//   ],
//   Concepts: [
//     { name: 'Machine Learning', icon: FaBrain, proficiency: 'Intermediate' },
//     { name: 'RESTful APIs', icon: FaCodeBranch, proficiency: 'Intermediate' },
//     { name: 'Data Science', icon: FaChartBar, proficiency: 'Beginner' },
//   ],
//   Databases: [
//     { name: 'MongoDB', icon: FaDatabase, proficiency: 'Intermediate' },
//     { name: 'MySQL', icon: FaDatabase, proficiency: 'Intermediate' },
//   ],
// };

import { FaJava, FaPython, FaJs, FaHtml5, FaReact, FaNodeJs, FaFire, FaCode, FaPaintBrush, FaAndroid, FaGithub, FaTable, FaBrain, FaCodeBranch, FaChartBar, FaDatabase, FaRProject } from 'react-icons/fa';
import { SiCplusplus, SiDjango, SiMongodb, SiMysql, SiExpress } from 'react-icons/si';

export const skills = {
  Languages: [
    { name: 'C++', icon: SiCplusplus, proficiency: 'Intermediate' },
    { name: 'Java', icon: FaJava, proficiency: 'Advanced' },
    { name: 'Python', icon: FaPython, proficiency: 'Advanced' },
    { name: 'JavaScript', icon: FaJs, proficiency: 'Advanced' },
    { name: 'HTML/CSS', icon: FaHtml5, proficiency: 'Intermediate' },
    { name: 'R', icon: FaRProject, proficiency: 'Beginner' }, // Replaced SiRlang with FaRProject
  ],
  Frameworks: [
    { name: 'React', icon: FaReact, proficiency: 'Advanced' },
    { name: 'Express.js', icon: SiExpress, proficiency: 'Intermediate' },
    { name: 'Node.js', icon: FaNodeJs, proficiency: 'Intermediate' },
    { name: 'Django', icon: SiDjango, proficiency: 'Beginner' },
    { name: 'Redux', icon: FaReact, proficiency: 'Intermediate' }, // Using React icon as proxy
    { name: 'Firebase', icon: FaFire, proficiency: 'Intermediate' },
  ],
  Tools: [
    { name: 'VS Code', icon: FaCode, proficiency: 'Advanced' },
    { name: 'Qt Designer', icon: FaPaintBrush, proficiency: 'Intermediate' },
    { name: 'Android Studio', icon: FaAndroid, proficiency: 'Intermediate' },
    { name: 'GitHub', icon: FaGithub, proficiency: 'Advanced' },
    { name: 'Excel', icon: FaTable, proficiency: 'Intermediate' },
  ],
  Concepts: [
    { name: 'Machine Learning', icon: FaBrain, proficiency: 'Intermediate' },
    { name: 'RESTful APIs', icon: FaCodeBranch, proficiency: 'Intermediate' },
    { name: 'Data Science', icon: FaChartBar, proficiency: 'Beginner' },
  ],
  Databases: [
    { name: 'MongoDB', icon: SiMongodb, proficiency: 'Intermediate' },
    { name: 'MySQL', icon: SiMysql, proficiency: 'Intermediate' },
  ],
};