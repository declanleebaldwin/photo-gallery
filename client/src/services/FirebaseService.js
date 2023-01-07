import { useState, useEffect } from "react";
import { db } from "..";
import { collection, getDocs } from "firebase/firestore";

export const useCollection = ({ collectionName }) => {
  const [documents, setDocuments] = useState()
  useEffect(() => {
    if (!collection) return;

    const getCollectionDocs = async () => {
      const docs = [];
      const querySnapshot = await getDocs(collection(db, collectionName));
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
        docs.push(doc.data())
      });
      setDocuments(docs)

    }

    getCollectionDocs().catch(e => console.log(e))

  }, [collectionName])

  return documents;
}