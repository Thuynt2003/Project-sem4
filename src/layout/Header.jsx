import React, { useState } from "react";
import { LuSchool } from "react-icons/lu";
import { BsQuestion } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PATH } from "../commons/Paths.jsx";
const Header = () => {
    const YearSchool = [{
        "YearSchoolId": "01",
        "year": "2003-2004"
    },
    {
        "YearSchoolId": "02",
        "year": "2004-2005"
    },
    {
        "YearSchoolId": "03",
        "year": "2005-2006"
    },
    {
        "YearSchoolId": "04",
        "year": "2006-2007"
    },
    {
        "YearSchoolId": "05",
        "year": "2007-2008"
    },
    {
        "YearSchoolId": "06",
        "year": "2009-2010"
    }]
    const [year, setYear] = useState(`${YearSchool.at(YearSchool.length - 1).year
        }`)

    const [classNameYear, setClassNameYear] = useState("hidden");
    const choseYearSchool = (year) =>{
        setYear(year);
        setClassNameYear("hidden")
    }
    return (
        <div className="header-item">
            <div className="name-business">
                <h3 style={{ marginRight: "5px" }}>Điểm Danh </h3>
                <div>
                    <BsQuestion size={19} style={{ background: "#3333", borderRadius: "50px" }} />
                </div>
            </div>
            <div className="school-inf">
                <div style={{
                    display: "flex", borderRight: "1px solid #3333",
                    paddingRight: "16px"
                }}>
                    <div className="school-name">
                        <div>
                            <LuSchool size={20} color="green" style={{ marginRight: "3px" }} />
                        </div>
                        <Link to="#" className="name-school">
                            Trường THPT Xuân Hòa
                        </Link>
                    </div>
                    <div className="school-year">
                        <div onClick={() => {
                            if (classNameYear === "hidden") {
                                setClassNameYear("show")
                            } else {
                                setClassNameYear("hidden")
                            }
                        }} style={{
                            width: "107px",
                            boxShadow: "0px 0px 4px 0.2px rgb(186 181 181)",
                            padding: "4px 0px 4px 16px",
                            borderRadius: "3px"
                        }}>
                            {
                                YearSchool.find(y => y.year == year).year
                            }
                            <IoIosArrowDown style={{
                                float: "right",
                                marginRight: "3px",
                                marginTop: "3px"
                            }} />
                        </div>
                        <div className={classNameYear}>
                            {
                                YearSchool.map((y => (
                                    <div className="yearItem" key={y.YearSchoolId} onClick={()=>choseYearSchool(y.year)}>
                                        {y.year}
                                    </div>
                                ))

                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="icon-search-notification">
                    <div className="icon-search">
                        <LiaSearchSolid size={27} />
                    </div>
                    <div className="icon-notification">
                        <IoIosNotificationsOutline size={27} />
                    </div>
                </div>

                <div className="count">
                    <VscAccount size={23} color="#857a7a" />
                    <p className="name">Nguyen Thi thuy</p>
                </div>
            </div>
        </div >
    )
}
export default Header;