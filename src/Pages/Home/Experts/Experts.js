import React from 'react';
import expert4 from '../../../image/expert/expert4.jpg';
import expert1 from '../../../image/expert/expert1.jpg';
import expert2 from '../../../image/expert/expert2.jpg';
import expert3 from '../../../image/expert/expert3.jpg';
import Expert from '../Expert/Expert';


const experts =[
    {id:1 ,name:'Monir',img:expert4},
    {id:1 ,name:'Meem',img:expert1},
    {id:1 ,name:'DIm',img:expert2},
    {id:1 ,name:'Him',img:expert3},
]
const Experts = () => {
           
    return (
        <div id="expert" className='container text-primary text-center'>
            <h1 className=''>Our Expert</h1>
                   <div className='row'>
            {
                experts.map(expert=><Expert
                  key={expert.id}
                  expert={expert}
                ></Expert>)
            }
                   </div>
        </div>
    );
};

export default Experts;