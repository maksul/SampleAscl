import MainLayout from './../layouts/MainLayout';
import WithSidebar from '../layouts/WithSidebar';
import Solad from '../images/Solad.jpg'
import ENGR from '../images/ENGRSuleiman.jpg'
import Hajiya from '../images/LegalAdviser.jpg'
import HDOperation from '../images/HeadOperation.jpg'
import HeadCA from '../images/HeadCoporateAffairs.jpg'
import HeadGA from '../images/GenAdmin.png'
import HeadFinance from '../images/Head Finance.jpg'
import HeadCommerce from '../images/Head Commerce.jpg'
import HeadSTA from '../images/Head STA.jpg'
import HeadMTC from '../images/Head MTC.jpg'
import HeadAudit from '../images/Head Audit.jpg'
import HeadNIBI from '../images/Head NIBI.jpg'
function ManagementProfile() {

    return (
        <MainLayout>
        <WithSidebar>
            <h1 className="s-facilities s-box">Management Profile</h1>
        <div className="s-box-header">
            <table>
                <tr>
                    <th>Management Picture</th>
                    <th>Profile</th>
                </tr>
                <tr>
                    <td><img src={Solad} height="250px" width="250px"/> </td>
                    <strong><td>Engr. Sumalia Abdul-Akaba <p>Sole Administartor</p></td></strong>
                </tr>
                <tr>
                    <td><img src={ENGR}/></td>
                    <td>Engr. Umar Suleiman Mohammed <p>Head Engineering Works and Services</p></td>
                </tr>
                <tr>
                   <td><img src={Hajiya}/></td>
                   <td>Hajiya Zainab AbdulRahman <p>Company Secratary/Legal Adviser</p></td>
                </tr>
                <tr>
                    <td><img src={HDOperation}/></td>
                    <td>Engr. Nuhu Yusuf MNSE <p>Head Operations</p></td>
                </tr>
                <tr>
                    <td><img src={HeadCA}/></td>
                    <td>Mr Ocheja Noah <p>Head, Coporate Affairs</p></td>
                </tr>
                <tr>
                    <td><img src={HeadGA}/></td>
                    <td>Mallam Ahmed Salihu <p>Head, General Admin</p></td>
                </tr>
                <tr>
                    <td> <img src={HeadFinance}/></td>
                    <td>Mr. Gimba Aken, Agbana <p>Head, Finance</p></td>
                </tr>
                <tr>
                    <td> <img src={HeadCommerce}/></td>
                    <td>Alhaji Mohammed Balogun <p>Head, Commerce</p></td>
                </tr>
                <tr>
                    <td> <img src={HeadSTA}/></td>
                    <td>Mr. Adejoh Musa, David <p>Head, STA</p></td>
                </tr>
                <tr>
                    <td> <img src={HeadMTC}/></td>
                    <td>Mr. Salihu Yahaya, Dada <p>Head, Metallugical Training Center</p></td>
                </tr>
                <tr>
                    <td> <img src={HeadAudit}/></td>
                    <td>Mr. Mauzu Mustapha, Balami <p>Head, Audit</p></td>
                </tr>
                <tr>
                    <td> <img src={HeadNIBI}/></td>
                    <td>Mr. Samson Ogun, Aluko <p>Head, NIBI</p></td>
                </tr>
            </table>
        </div>
        </WithSidebar>


        </MainLayout>
    )
}

export default ManagementProfile;