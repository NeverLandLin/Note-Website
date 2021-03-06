import React from 'react';
import { Button } from '../../Button';
import './MentorPlans.css';
import { BsXDiamondFill } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function MentorPlansMenu() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='MentorPlans__section'>
        <div className='MentorPlans__wrapper'>
          <h1 className='MentorPlans__heading'>一對一輔導計劃</h1>
          <div className='MentorPlans__container'>
            <Link to ='/signup' className='MentorPlans__container-card'>
              <div className='MentorPlans__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>國內大學</h3>
                <h4>備審資料輔導</h4>
                <ul className='MentorPlans__container-features'>
                  <li>大量優秀備審模板</li>
                  <li>模擬二階面試問答</li>
                </ul>

                <Link to='/reservation' className="btn-link">
                  <Button buttonSize='btn--wide' buttonColor='primary'>
                    我要預約
                  </Button>
                </Link>
              </div>
            </Link>
            <Link to ='/signup' className='MentorPlans__container-card'>
              <div className='MentorPlans__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>國內大學</h3>
                <h4>考試準備輔導</h4>
                <ul className='MentorPlans__container-features'>
                  <li>讀書方法分享</li>
                  <li>志願選填建議</li>
                </ul>
                <Link to='/reservation' className="btn-link">
                  <Button buttonSize='btn--wide' buttonColor='primary'>
                    我要預約
                  </Button>
                </Link>
              </div>
            </Link>
            <Link to ='/signup' className='MentorPlans__container-card'>
              <div className='MentorPlans__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>國外大學</h3>
                <h4>申請事務輔導</h4>
                <ul className='MentorPlans__container-features'>
                  <li>大量優秀作文範例</li>
                  <li>模擬二階面試問答</li>
                </ul>
                <Link to='/reservation' className="btn-link">
                  <Button buttonSize='btn--wide' buttonColor='primary'>
                    我要預約
                  </Button>
                </Link>
              </div>
            </Link>
            <Link to ='/signup' className='MentorPlans__container-card'>
              <div className='MentorPlans__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>國外大學</h3>
                <h4>考試準備輔導</h4>
                <ul className='MentorPlans__container-features'>
                  <li>讀書方法分享</li>
                  <li>選校選系建議</li>
                </ul>
                <Link to='/reservation' className="btn-link">
                  <Button buttonSize='btn--wide' buttonColor='primary'>
                    我要預約
                  </Button>
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default MentorPlansMenu;
