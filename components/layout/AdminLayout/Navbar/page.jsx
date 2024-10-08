import React from "react";
import Image from "next/image";
import Languages from "../../../admin-languages/page";
import styles from "./Navbar.module.scss";
import Button from "../../../shared/admin/Button/Button";
import {
  AddIcon,
  BurgerIcon,
} from "../../../../assets/images/admin/admin.vector";
import { useContext } from "react";
import { GlobalContext } from "../../../../Context/globalcontext";

import AddProducts from "../../../pages/addproducts/index";
export default function Navbar() {
  const { openaddproducts } = useContext(GlobalContext);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar__box}>
          <div className={styles.navbar__left}>
            <button className={styles.burger__button}>
              <BurgerIcon />
            </button>
            <Image
              src="/adminImgs/logo.svg"
              alt="logo"
              width={92}
              height={32}
            />
          </div>
          <div className={styles.navbar__right}>
            <Button icon={AddIcon} hideTextOnMobile={true} />
            {console.log(Button)}
            <div className={styles.language}>
              <Languages />
            </div>
            <button>Admin</button>
          </div>
        </div>

        {openaddproducts && <AddProducts/>}
      </div>
    </>
  );
}
