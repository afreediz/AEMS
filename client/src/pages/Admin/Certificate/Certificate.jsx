import React from 'react'
import './certificate.css'
import { Document, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { useState } from 'react';


const Certificate = () => {
  const [data, setData] = useState({
    name:"",
    date:"",
    college:"",
    event:""
  })
  const on_change = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value})
  }
  return (
    <div className=' text-3xl'>
        <div className="table-header">
            <p>GENERATE CERTIFICATE</p>
        </div>
        <div className=" grid grid-cols-10">
        <div className="container flex flex-col mx-auto my-8 max-w-7xl col-span-5">
          <span>NAME</span>
          <input onChange={on_change} name='name' type="text" className='outline outline-slate-700 mb-4  rounded border-2 border-slate-500 p-4 max-w-40:'/>
          <span>COLEGE</span>
          <input onChange={on_change} name='college' type="text" className='outline outline-slate-700 mb-4  rounded border-2 border-slate-500 p-4 max-w-40:'/>
          <span>DATE</span>
          <input onChange={on_change} name='date' type="date" className='outline outline-slate-700 mb-4  rounded border-2 border-slate-500 p-4 max-w-40:'/>
          <span>EVENT</span>
          <input onChange={on_change} name='event' type="text" className='outline outline-slate-700 mb-4  rounded border-2 border-slate-500 p-4 max-w-40:'/>
        </div>
        <div className="col-span-5 ml-4">
          <PDFViewerComponent name={data.name} college={data.college} date={data.date} event={data.event}/>
        </div>
        </div>
    </div>
  )
}

const inchesToPoints = (inches) => inches * 72;

const certificateWidth = inchesToPoints(8.5); // Width in inches converted to points
const certificateHeight = inchesToPoints(10); // Height in inches converted to points

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    textAlign: 'center',
  },
});

const MyDocument = ({name, college, date, event}) => (
  <Document>
    <Page size={{ width: certificateWidth, height: certificateHeight-100 }} style={styles.page}>
      <View style={styles.section}>
        <Text>
          {`certificate for excellence -
          This is ${name} from ${college} on ${date} for ${event}`}
        </Text>
      </View>
    </Page>
  </Document>
);

const PDFViewerComponent = ({ name, college, date, event}) => (
  
  <div>
    <PDFDownloadLink document={<MyDocument />} fileName="certificate.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  <PDFViewer style={{ width: `${certificateWidth}px`, height: `${certificateHeight-60}px` }}>
    <MyDocument name={name} college={college} date={date} event={event} />
  </PDFViewer>

  </div>
);



export default Certificate
