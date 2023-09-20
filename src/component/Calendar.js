import React from 'react';
import AnimatedWrap from "./AnimatedWrap";
import './Calendar.css';

const Calendar = () => {
    
    return (
        <div className="calendar_whole_wrapper">
            <img className="border_img"
               src={require(`../assets/images/calendar_border.png`)}
            />
            <div className="calendar_wrapper">
            <div className="f-l calendar_month">10월</div>
                <div className="calendar">
                    <AnimatedWrap>
                        <div className="calendar_row_wrap_weekend">
                            <div><span className="calendar_sun">SUN</span></div>
                            <div><span>MON</span></div>
                            <div><span>TUE</span></div>
                            <div><span>WED</span></div>
                            <div><span>THU</span></div>
                            <div><span>FRI</span></div>
                            <div><span className="calendar_sat">SAT</span></div>
                        </div>
                    </AnimatedWrap>
                    <AnimatedWrap>
                        <div className="calendar_row_wrap">
                            <div><span className="calendar_sun">1</span></div>
                            <div><span>2</span></div>
                            <div><span>3</span></div>
                            <div><span>4</span></div>
                            <div><span>5</span></div>
                            <div><span>6</span></div>
                            <div><span className="calendar_sat">7</span></div>
                        </div>
                    </AnimatedWrap>
                    <AnimatedWrap>
                        <div className="calendar_row_wrap">
                            <div><span className="calendar_sun">8</span></div>
                            <div><span>9</span></div>
                            <div><span>10</span></div>
                            <div><span>11</span></div>
                            <div><span>12</span></div>
                            <div><span>13</span></div>
                            <div><span className="calendar_sat">14</span></div>
                        </div>
                    </AnimatedWrap>
                    <AnimatedWrap>
                        <div className="calendar_row_wrap">
                            <div><span className="calendar_sun">15</span></div>
                            <div><span>16</span></div>
                            <div><span>17</span></div>
                            <div><span>18</span></div>
                            <div><span>19</span></div>
                            <div><span>20</span></div>
                            <div><span className="calendar_sat">21</span></div>
                        </div>
                    </AnimatedWrap>
                    <AnimatedWrap>
                        <div className="calendar_row_wrap">
                            <div><span className="d_day_">22</span></div>
                            <div><span>23</span></div>
                            <div><span>24</span></div>
                            <div><span>25</span></div>
                            <div><span>26</span></div>
                            <div><span>27</span></div>
                            <div className="calendar_sat"><span>28</span></div>
                        </div>
                    </AnimatedWrap>
                    <AnimatedWrap>
                        <div className="calendar_row_wrap">
                            <div><span className="calendar_sun">29</span></div>
                            <div><span>30</span></div>
                            <div><span>31</span></div>
                            <div><span></span></div>
                            <div><span></span></div>
                            <div><span></span></div>
                            <div><span className="calendar_sat"></span></div>
                        </div>
                    </AnimatedWrap>
                </div>
            </div>       
        </div>
            
    )
}

export default Calendar;