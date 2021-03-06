import axios from "axios";

// let url = "";
// if (process.env.NODE_ENV === "development") {
//   url = "http://localhost:4000/";
// } else {
//   url = "https://ntu-webprograming-project.herokuapp.com/";
// }

let url = "https://ntu-webprograming-project.herokuapp.com/";
const instance = axios.create({ baseURL: url });
// const instance = axios.create({ baseURL: "http://localhost:4000/note" || `${process.env.baseURL}/note` });


//member name and note name
const buyNote = async (member, note) => {
  const {
    //data is the reserve word, money is the return parameters
    data: { money },
  } = await instance.post(`note/buyNote`, null, { params: { member, note } });

  return money;
};

/* this way cannot pass filebase64, but I cannot find the reason
//member name and note object
const addNote = async (member, note) => {
    console.log(note)
    //cannot pass a object directly(will become undefined)
    let title = note.title
    let grade = note.grade
    let subject = note.subject
    let price = note.price
    let img = note.img
    let description = note.description
    let pdffile = note.pdffile
    let pdffile_preview = note.pdffile_preview
    const {
	    data: {msg}
    } = await instance.post(`addNote`,null,{params:{member,title,grade,subject,price,img,description,pdffile,pdffile_preview}})
    return msg
  }
*/

// for addNote
// const uploadurl = "http://localhost:4000/note/addNote/" || `${process.env.baseURL}/note/addNote/`;

const createitem = (member, title, grade, subject, price, img, description, pdffile, pdffile_preview) =>
  axios.post(url + "note/addNote/", {
    member,
    title,
    grade,
    subject,
    price,
    img,
    description,
    pdffile,
    pdffile_preview,
  });

const addNote = async (member, note) => {
  try {
    let title = note.title;
    let grade = note.grade;
    let subject = note.subject;
    let price = note.price;
    let img = note.img;
    let description = note.description;
    let pdffile = note.pdffile;
    let pdffile_preview = note.pdffile_preview;
    const { data } = await createitem(member, title, grade, subject, price, img, description, pdffile, pdffile_preview);

    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchAuthor = async (id) => {
  // this should be get, but I need to pass the id, so I use post
  const {
    //data is the reserve word, author is the return parameters
    data: { authorName },
  } = await instance.post(`note/fetchAuthor`, null, { params: { id } });

  return authorName;
};

const checkHaveBuy = async (id, memberName) => {
  const {
    data: { haveBuy },
  } = await instance.get(`note/checkHaveBuy`, { params: { id, memberName } });

  return haveBuy;
};

const testAddMoney = async (name) => {
  const {
    //data is the reserve word, money is the name of return parameter
    data: { money },
  } = await instance.post(`note/${name}/addMoney`, null, { params: { name } });
  return money;
};

const testResetMoney = async (name) => {
  const {
    data: { money },
  } = await instance.post(`note/${name}/resetMoney`, null, { params: { name } });
  return money;
};

export { buyNote, addNote, fetchAuthor, checkHaveBuy };
export { testAddMoney, testResetMoney };
