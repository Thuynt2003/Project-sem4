import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { DatePicker, Space } from 'antd';
import { Button } from 'antd';
import * as dayjs from 'dayjs';
import { Table } from 'antd';
import { Radio } from 'antd';


const Attendences = () => {
    const AllClasses = [{
        "classId": "01",
        "className": "1a1",
        SchoolBlock: {
            "schoolBlockId": "01",
            "schoolBlockName": "1"
        }
    }, {
        "classId": "02",
        "className": "1a2",
        SchoolBlock: {
            "schoolBlockId": "01",
            "schoolBlockName": "1"
        }
    },
    {
        "classId": "03",
        "className": "1a3",
        SchoolBlock: {
            "schoolBlockId": "01",
            "schoolBlockName": "1"
        }
    },
    {
        "classId": "04",
        "className": "1a4",
        SchoolBlock: {
            "schoolBlockId": "01",
            "schoolBlockName": "1"
        }
    },
    {
        "classId": "05",
        "className": "1a5",
        SchoolBlock: {
            "schoolBlockId": "01",
            "schoolBlockName": "1"
        }
    },
    {
        "classId": "06",
        "className": "1a6",
        SchoolBlock: {
            "schoolBlockId": "01",
            "schoolBlockName": "1"
        }
    },
    {
        "classId": "07",
        "className": "2a1",
        SchoolBlock: {
            "schoolBlockId": "02",
            "schoolBlockName": "2"
        }
    },
    {
        "classId": "08",
        "className": "2a2",
        SchoolBlock: {
            "schoolBlockId": "02",
            "schoolBlockName": "2"
        }
    },
    {
        "classId": "09",
        "className": "2a3",
        SchoolBlock: {
            "schoolBlockId": "02",
            "schoolBlockName": "2"
        }
    },
    {
        "classId": "10",
        "className": "2a4",
        SchoolBlock: {
            "schoolBlockId": "02",
            "schoolBlockName": "2"
        }
    },

    {
        "classId": "11",
        "className": "2a5",
        SchoolBlock: {
            "schoolBlockId": "02",
            "schoolBlockName": "2"
        }
    }, {
        "classId": "12",
        "className": "2a6",
        SchoolBlock: {
            "schoolBlockId": "02",
            "schoolBlockName": "2"
        }
    },
    {
        "classId": "13",
        "className": "3a1",
        SchoolBlock: {
            "schoolBlockId": "03",
            "schoolBlockName": "3"
        }
    }
        ,
    {
        "classId": "14",
        "className": "3a2",
        SchoolBlock: {
            "schoolBlockId": "03",
            "schoolBlockName": "3"
        }
    }
        ,
    {
        "classId": "15",
        "className": "3a3",
        SchoolBlock: {
            "schoolBlockId": "03",
            "schoolBlockName": "3"
        }
    }
        ,
    {
        "classId": "16",
        "className": "3a4",
        SchoolBlock: {
            "schoolBlockId": "03",
            "schoolBlockName": "3"
        }
    }
        ,
    {
        "classId": "17",
        "className": "3a5",
        SchoolBlock: {
            "schoolBlockId": "03",
            "schoolBlockName": "3"
        }
    }
        ,
    {
        "classId": "18",
        "className": "3a6",
        SchoolBlock: {
            "schoolBlockId": "03",
            "schoolBlockName": "3"
        }
    },
    {
        "classId": "19",
        "className": "4a1",
        SchoolBlock: {
            "schoolBlockId": "04",
            "schoolBlockName": "4"
        }
    },
    {
        "classId": "20",
        "className": "4a2",
        SchoolBlock: {
            "schoolBlockId": "04",
            "schoolBlockName": "4"
        }
    },
    {
        "classId": "21",
        "className": "4a3",
        SchoolBlock: {
            "schoolBlockId": "04",
            "schoolBlockName": "4"
        }
    },
    {
        "classId": "22",
        "className": "4a4",
        SchoolBlock: {
            "schoolBlockId": "04",
            "schoolBlockName": "4"
        }
    },
    {
        "classId": "23",
        "className": "4a5",
        SchoolBlock: {
            "schoolBlockId": "04",
            "schoolBlockName": "4"
        }
    },
    {
        "classId": "24",
        "className": "4a6",
        SchoolBlock: {
            "schoolBlockId": "04",
            "schoolBlockName": "4"
        }
    },
    {
        "classId": "25",
        "className": "5a1",
        SchoolBlock: {
            "schoolBlockId": "05",
            "schoolBlockName": "5"
        }
    },
    {
        "classId": "26",
        "className": "5a2",
        SchoolBlock: {
            "schoolBlockId": "05",
            "schoolBlockName": "5"
        }
    },
    {
        "classId": "27",
        "className": "5a3",
        SchoolBlock: {
            "schoolBlockId": "05",
            "schoolBlockName": "5"
        }
    },
    {
        "classId": "28",
        "className": "5a4",
        SchoolBlock: {
            "schoolBlockId": "05",
            "schoolBlockName": "5"
        }
    },
    {
        "classId": "29",
        "className": "5a5",
        SchoolBlock: {
            "schoolBlockId": "05",
            "schoolBlockName": "5"
        }
    },
    {
        "classId": "30",
        "className": "5a6",
        SchoolBlock: {
            "schoolBlockId": "05",
            "schoolBlockName": "5"
        }
    }
    ];
    const onChangeCheckBox = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const selectedAlls = (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows)
    }
    const rowSelection = {
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
    };
    const columns = [
        {
            title: 'Stt',
            dataIndex: 'Stt',
            key: 'Stt',
            width: '5%',
        },
        {
            title: 'Họ tên',
            dataIndex: 'Ho_Ten',
            key: 'Ho_Ten',
            width: '32%',
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'Ngay_sinh',
            key: 'Ngay_sinh',
            width: '14%',
        },
        {
            title:"Có mặt",
            dataIndex: 'Co_Mat',
            width: '14%',
            key: 'Co_Mat',
        },
        {
            title: 'Nghỉ có phép',
            dataIndex: 'Nghi_Co_Phep',
            width: '14%',
            key: 'Nghi_Co_Phep',
        },
        {
            title: 'Nghỉ không phép',
            dataIndex: 'Nghi_Khong_Phep',
            width: '14%',
            key: 'Nghi_Khong_Phep',
        },
    ];
    const data = [
        {
            key: 1,
            Ho_Ten: 'John Brown sr.',
            Ngay_sinh: "12/1/2012",
            Stt: 1,
            Co_Mat: <Radio></Radio>,
            Nghi_Co_Phep:<Radio></Radio>,
            Nghi_Khong_Phep:<Radio></Radio>

        },
        {
            key: 2,
            Ho_Ten: 'Joe Black',
            Ngay_sinh: "12/2/2012",
            Stt: 2,
            Co_Mat: <Radio></Radio>,
            Co_Mat: <Radio></Radio>,
            Nghi_Co_Phep:<Radio></Radio>,
            Nghi_Khong_Phep:<Radio></Radio>
        },
    ];
    const [classes, setClass] = useState("1a1");
    const [classNameClass, setClassNameClass] = useState("hidden");
    const choseClass = (className) => {
        setClass(className);
        setClassNameClass("hidden")

    }
    const [attendence, setAtendence] = useState("attendance-by-day");
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div className="attendances">
            <div className="attendanceItem">
                <div className={`attendance ${attendence === "attendance-by-day" ? "active" : ""}`} onClick={() => setAtendence("attendance-by-day")}>
                    Điểm danh theo ngày
                </div>
                <div className={`attendance ${attendence === "attendance-by-month" ? "active" : ""}`} onClick={() => setAtendence("attendance-by-month")}>
                    Điểm danh theo tháng
                </div>
            </div>
            <div className={`${attendence !== "attendance-by-day" ? "hidden" : "attendance-by-day"}`}>
                <div style={{ display: "flex", padding: "16px" }}>
                    <div className="class">
                        <div onClick={() => {
                            if (classNameClass === "hidden") {
                                setClassNameClass("show")
                            } else {
                                setClassNameClass("hidden")
                            }
                        }} style={{
                            width: "107px",
                            padding: "4px 0px 4px 16px",
                            borderRadius: "3px",
                            border: "1px solid #3333",
                            marginRight: "13px"
                        }}>
                            {AllClasses.find(c => c.className === classes).className}
                            <IoIosArrowDown style={{
                                float: "right",
                                marginRight: "3px",
                                marginTop: "3px"
                            }} />
                        </div>
                        <div className={classNameClass}>

                            {AllClasses.map((c => (
                                <div onClick={() => choseClass(c.className)} key={c.classId}>
                                    {c.className}
                                </div>
                            )))}
                        </div>

                    </div>
                    <Space direction="vertical">
                        <DatePicker onChange={onChange} disabledDate={(date) => {
                            return date.isBefore(dayjs(new Date(`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`)))
                        }} />
                    </Space>
                    <div className="number-student">
                        Tất cả : 38
                    </div>
                    <div className="number-student-go-to-school">
                        Có mặt : 38
                    </div>
                    <div className="Study-permits-are-allowed">
                        Có phép : 0
                    </div>
                    <div className="Study-permits-are-not-allowed">
                        Không phép : 0
                    </div>
                    <div style={{ width: "560px" }}>
                        <Button type="primary" style={{ float: "right", background: "#349634" }}>Thông báo cho PH</Button>
                    </div>
                </div>
                <div className="list-student">
                    <Table
                        rowSelection={{
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                        style={{textAlign:"center"}}
                    />
                </div>
            </div>
            <div className={`${attendence !== "attendance-by-month" ? "hidden" : "attendance-by-month"}`}>
                <div>
                    Điểm danh theo tháng
                </div>
            </div>

        </div>
    )

}
export default Attendences;