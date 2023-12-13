
import { useEffect, useRef } from 'react';
import { useLocalStorage } from '../../Utils/useLocalStorage';
import detectDarkMode from '../../Utils/detectDarkMode';
import sun from './../../img/icons/sun.svg';
import moon from './../../img/icons/moon.svg';
import './style.css';



const DarkMode = () => {
    
    const [theme, setTheme] = useLocalStorage('theme', detectDarkMode()) //  setTheme(localStorage.getItem('theme'))
  
    const btnRef = useRef(null)
  
    useEffect(() => {
        

        if (theme === 'dark') {
            document.body.classList.add('dark');
            btnRef.current.classList.add('dark-mode-btn--active');
        } else {
            document.body.classList.remove('dark');
            btnRef.current.classList.remove('dark-mode-btn--active');
        }


        // if (localStorage.getItem('theme') === 'dark') {
        //     document.body.classList.add('dark');
        //     btnRef.current.classList.add('dark-mode-btn--active');
        // } else {
        //     document.body.classList.remove('dark');
        //     btnRef.current.classList.remove('dark-mode-btn--active');
        // }
    }, [theme])

    const toggleTheme = () => {
        setTheme((currentValue) => {
         return currentValue === 'light' ? 'dark' : 'light' //   setTheme(theme === 'light' ? 'dark' : 'light')
        })
    }

	return (
            <>
            {DarkMode}
			<button
                ref={btnRef}
				className='dark-mode-btn'
				onClick={toggleTheme}

                aria-label='Dark mode'
			>
				<img src={sun} alt='Light mode' className='dark-mode-btn__icon' />
				<img src={moon} alt='Dark mode' className='dark-mode-btn__icon' />
			</button>
            </>
	)

}

export default DarkMode
