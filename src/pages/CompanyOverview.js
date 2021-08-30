import MainLayout from './../layouts/MainLayout';
import WithSidebar from './../layouts/WithSidebar';
import IMGCompany from '../images/Company Overview.jpg'
function CompanyOverview() {

    return (
        <MainLayout>
            <WithSidebar>
                <h1 className="s-facilities s-box">Company Overview</h1>
                <div className="s-box-header">
                <img src={IMGCompany}/>

                <p>Ajaokuta Steel Company is located on 24,000 hectares of sprawling 
                green-field land-mass. The Steel Plant itself is built on 800-hectares of land. 
                The chosen Technology for Steel Production is the time tested Blast-Furnace – Basic Oxygen 
                Furnace route for Steel Production.
                </p>

                <p>The Ajaokuta Steel Plant’s major units are as follows;</p>

                <h2>OVERVIEW</h2>
                <li>Integrated Steel Plant based on BF- BOF Route</li>
                <li>Installed capacity – 1.3 Million Tonnes PA</li>
                <li>Provision to increase Capacity  to 2.6 Million Tonnes and further to 5.2 Million Tonnes PA</li>
                <li>Rolling commenced November ’04</li>
                <li> Rolling Entire Range</li>
                <li> Wire rod  5.5 mm- 12 mm</li>
                <li> Rebars 8 mm – 30 mm</li>


                <h2>Plant Facilities</h2>


               <li>Coke Batteries - 0.88 MTPA capacity</li>
               <li>Sinter Plant - 2.6 MTPA of fluxed sinter</li>
               <li>Two Basic Oxygen Furnaces – (130 tons each) 1.3 MTPA.</li>
               <li>Three continuous bloom casters of four strands each.</li>
               <li>Billet Mill  -  795,000 TPA</li>
               <li>Wire Rod Mill (WRM)  - 130,000 TPA</li>
               <li>Light Section Mill (LSM)  - 400,000 TPA</li>
               <li>Medium Section and Structural Mills (MSSM) -  560,000 TPA</li>
               <li>Thermal Power Plant can produce a total of 110 MW from 2 generators of 55MW each.</li>

               <p>Among the auxiliary plants are the:</p>
               <li>Lime Production Plant,</li>
               <li>Alumino Silicate Refactory Plant and</li>
               <li>Tar bonded Dolomite Plant.</li>  

               <p>These major units are serviced by an array of water treatment and recirculation 
               facilities and extensive gas facilities. A captive Power Plant of capacity 110mw is 
               to provide an alternative source of power to the Steel Plant.Engineering Complex:</p>

               <p>Engineering Complex as one of the auxiliary units adequately equipped with machines
                and equipment for the manufacture of spare parts and fixtures of various specifications.</p>


               <h2>CAPABILITY</h2>

          <em>Billets</em>
           <li>100 x 100 mm</li>

          <em>WRM</em>
         <li>Wire rods of size between 5.5 mm to 12.5 mm.</li> 
         <li>Re bars of size between 6.0 mm to 12 mm.</li>

           <em> LSM </em>
        <li>    Plain and re bars    :    10 mm to 30 mm</li>
        <li>    Squares                  :    10 mm to 30 mm.</li>
        <li>    Hexagons               :    10 – 14 mm , 20 and 26.</li>
        <li>    Angles                    :    25x25 mm to 50x50 mm in thickness between 3 mm to 6mm.</li>
        <li>    Channels                :    30 mm to 45 mm.</li>
        <li>    T – sections            :    30 mm to 60 mm.</li>
        <li>    Strips                      :    6-12 ( t ) x 12 - 70 ( w )mm</li>

           <em> MSSM</em> 
        <li>    I beams                   :    80 mm to 300 mm.</li>
        <li>    Channels                :    80 mm to 300 mm.</li>
        <li>    Equal angles           :    70 x 70 mm up to130x130 mm.</li>
        <li>    Un equal angles.     :    50x80 mm and 100 x 160 mm.</li>
        <li>    Flats                        :    70 mm to 150 mm width x 10 to 20 mm in thickness.</li>
            </div>
            </WithSidebar>
        </MainLayout>
    )
}

export default CompanyOverview;