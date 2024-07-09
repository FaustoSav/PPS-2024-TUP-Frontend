import { Moon } from "../../icons/Moon"
import { Sun } from "../../icons/Sun"



export const ThemeIcon = ({ icon }) => {
  return (
    <>
      {icon === 'sun' && <Sun />}
      {icon === 'moon' && <Moon />}
      
    </>
  )
}
