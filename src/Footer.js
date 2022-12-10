import { CDBFooter } from "cdbreact";
import { CDBFooterLink, CDBBox } from "cdbreact";
function Footer() {
  let myStyle = {
    color: "#ffd89b",
    backgroundColor: "#e29587",
    textDecoration: "underline"
  };
  return (
    <>
      <CDBFooter style={myStyle} className="shadow">
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-5"
          style={{ width: "90%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <p className="my-3" style={{ width: "250px" }}></p>
            </CDBBox>
            <CDBBox>
              <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <CDBFooterLink style={myStyle} href="../">
                  Home
                </CDBFooterLink>
                <CDBFooterLink style={myStyle} href="./book">
                  List
                </CDBFooterLink>
                <CDBFooterLink
                  style={myStyle}
                  href="https://codesandbox.io/s/ec61x0?file=/src/Faculties.js"
                >
                  Go to code
                </CDBFooterLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
    </>
  );
}

export default Footer;
