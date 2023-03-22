import * as C from "./Style"
// import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai"
import profile from "../../assets/profile.png"
import icon1 from "../../assets/github.svg"
import icon2 from "../../assets/twitter.svg"
import icon3 from "../../assets/facebook.svg"
import icon4 from "../../assets/instagram.svg"
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
            <C.imgBox src={profile}/>
            <C.box>
                <h1 style={{margin: 0}}>Lee Hee Sung</h1>
                <span style={{margin: 0, color: "#F3BF99"}}>Frontend Developer</span>
                <C.subTxt><a href="https://velog.io/@dev_lheesung">My Blog</a></C.subTxt>
                <div style={{ display: "flex", gap: "17px", marginTop: "15px"}}>
                    <C.btn onClick={() => handleCopyClipBoard('lheesung.dev@gmail.com')}>Email</C.btn>
                    <C.btn onClick={() => handleCopyClipBoard('https://www.instagram.com/lcaf_17/')} style={{background: "#5093E2", color: "white"}}>Ig</C.btn>
                </div>
                <C.textBox>
                    <h1 style={{fontSize: "16px"}}>About</h1>
                    <p style={{fontSize: "10.24px"}}>
                        Hi! My name is Hee Sung Lee.
                        I'm in high school now.
                        And I'm study about Front-end.
                        And I want to Front-end Developer.
                    </p>
                </C.textBox>
                <C.textBox>
                    <h1 style={{fontSize: "16px"}}>About</h1>
                    <p style={{fontSize: "10.24px"}}>
                        My Hobby is watching movie,
                        play soccer with my friends,
                        or play game with my friends.
                        And I like old Japanese city pop.
                        The best one is plastic love.
                    </p>
                </C.textBox>
            </C.box>
            <C.footer>
                <a><img src={icon2} /></a>
                <a href="https://github.com/lheesung"><img src={icon1} /></a>
                <a href="https://github.com/lheesung"><img src={icon3} /></a>
                <a href="https://www.instagram.com/lcaf_17/"><img src={icon4} /></a>
            </C.footer>
        </C.container>
    )
}