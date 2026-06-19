import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getDatabase,
ref,
push,
set,
get
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
 apiKey: "AIzaSyAgj20aECFFr6veVRa5DbmzkHWjN00XCw8",
 authDomain: "affliate-fe082.firebaseapp.com",
 databaseURL: "https://affliate-fe082-default-rtdb.firebaseio.com",
 projectId: "affliate-fe082",
 storageBucket: "affliate-fe082.firebasestorage.app",
 messagingSenderId: "514479773253",
 appId: "1:514479773253:web:32ae1143de597c7415752c",
 measurementId: "G-XDGLE4367Y"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export { ref, push, set, get };