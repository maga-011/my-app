import Link from 'next/link';
import styles from './register.module.css'

const Register = () => {
  return <div className={styles.container}> 
  <div className={styles.contentWrapper}>
<form action="" className={styles.form}>
<input type="text" placeholder='username' />
<input type="email" placeholder='email' />
<input type="password " placeholder='password'/>
<input type="password" placeholder='password again' />
<button> register </button>
<Link href={'./login'}> have an account? <b>Login</b> </Link>
</form>
  </div>
  
  </div>;
};

export default Register;
