import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const SignUp = () => {

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        createUserWithEmailAndPassword(auth, email.value, password.value);
        console.log(email.value, password.value);
      };

return (
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id="password" name="password" type="password" />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </div>
  );
  };
  
