export default function Input({ richText, ...props }) {
   
    if (richText) {
      
      return <textarea {...props} />;
    } else {
  
      return <input {...props} />;
    }
  }
  