import { useParams } from 'react-router-dom'
import BtnGitHub from '../components/Button-GitHub/Btn/BtnGitHub'
import { projects } from './../components/helpers/ProjectsList'
// import img from './../img/projects/02-big.jpg';
const Projects = () => {
	const { id } = useParams()
	const project = projects[id]

	return (
		<main className='section'>
			<div className='container'>
				<div className='project-details'>
					<h1 className='title-1'>{project.title}</h1>

					<img src={project.imgBig} alt='' className='project-details__cover' />

					<div className='project-details__desc'>
						<p>{project.skills}</p>
					</div>

					{/* <a href="#!" className="btn-outline">
                            <img src={gitHubIcon} alt=""/>
                                GitHub repo
                        </a> */}

					{project.gitHubLink && <BtnGitHub link={project.gitHubLink}/>}
				</div>
			</div>
		</main>
	)
}

export default Projects
