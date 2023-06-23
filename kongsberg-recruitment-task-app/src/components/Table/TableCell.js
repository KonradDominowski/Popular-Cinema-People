import classes from './TableCell.module.css'

export default function TableCell({ children, className }) {
	return <div className={ `${classes.cell} ${className ? classes[className] : ''}` }>{ children }</div>
}
