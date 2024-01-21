import React from 'react';
import Login from "@/pageComponents/auth/login/login";
import styles from './page.module.css';

function AuthAdmin() {
    return (
        <div className={styles.mainContainer}>
            <Login  />
        </div>
    );
}

export default AuthAdmin;