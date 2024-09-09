export default function Input({ label,textarea, ...prpos }){
    return(
        <p>
            <label>{label}</label>
            {textarea ? <textarea {...prpos}/> : <input {...prpos}/>}
        </p>
    )
}