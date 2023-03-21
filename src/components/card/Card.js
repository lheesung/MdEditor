import * as C from "./Style"
// import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai"

export default function Card() {
    const handleCopyClipBoard = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          alert('Copied');
        } catch (error) {
          alert('Try again');
        }
      };
    return (
        <C.container>
            <C.imgBox></C.imgBox>
            <C.box>
                <h1 style={{margin: 0}}>Lee Hee Sung</h1>
                <span style={{margin: 0}}>Frontend Developer</span>
                <C.subTxt><a href="https://velog.io/@dev_lheesung">My Blog</a></C.subTxt>
                <div style={{ display: "flex", gap: "17px", marginTop: "15px"}}>
                    <C.btn onClick={() => handleCopyClipBoard('lheesung.dev@gmail.com')}>Email</C.btn>
                    <C.btn onClick={() => handleCopyClipBoard('https://www.instagram.com/lcaf_17/')} style={{background: "#5093E2", color: "white"}}>Ig</C.btn>
                </div>
                <div style={{display: "box"}}>
                    <h1>About</h1>
                    <p></p>
                </div>
                <div>
                    <h1>About</h1>
                    <p></p>
                </div>
            </C.box>
            <C.footer></C.footer>
        </C.container>
    )
}