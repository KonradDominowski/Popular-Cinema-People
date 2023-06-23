import classes from './Spinner.module.css'

export default function Spinner() {
	return <div className={ classes.loader }>
		<span className={ classes.bar }></span>
		<span className={ classes.bar }></span>
		<span className={ classes.bar }></span>
	</div>
}
