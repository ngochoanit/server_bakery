// import { getDB } from "../configs/connectDB";
// import { ERROR_CODE } from "../constants/errorCode";
// import { generateRefreshToken, generateToken } from "../helpers/jwt.helper";

// let tokenList = {};
// export const handleUserLogin = async (email, password) => {
//   try {
//     const db = await getDB();
//     const isExist = await checkUserEmail(email);
//     if (isExist) {
//       const [rows, fields] = await db.query(
//         `SELECT * FROM tbluser WHERE email='${email}' AND password='${password}' LIMIT 1`
//       );
//       if (rows.length === 1) {
//         const accessToken = await generateToken({
//           userId: rows[0].id,
//           roleId: rows[0].role,
//           email: rows[0].email,
//         });
//         const refreshToken = await generateRefreshToken({
//           userId: rows[0].id,
//           roleId: rows[0].role,
//           email: rows[0].email,
//         });
//         tokenList[refreshToken] = { accessToken, refreshToken };
//         return {
//           ...ERROR_CODE.OK,
//           data: {
//             accessToken: accessToken,
//             userId: rows[0].id,
//             roleId: rows[0].role,
//             email: rows[0].email,
//             lastName: rows[0].lastName,
//             firstName: rows[0].firstName,
//           },
//         };
//       } else {
//         return ERROR_CODE.EMAIL_OR_PASSWORD_INCORRECT;
//       }
//     }
//   } catch (err) {
//     console.log(err);
//     throw new Error(err);
//   }
//   // return new Promise(async (resolve, reject) => {
//   //     try {
//   //         const userData = {}
//   //         const isExist = await checkUserEmail(email)
//   //         if (isExist) {
//   //             //user already exist
//   //             //compare password
//   //             const user = await db.User.findOne({
//   //                 where: { email: email },
//   //                 attributes: ['email', 'id', 'roleId', 'password', 'firstName', 'lastName'],
//   //                 raw: true
//   //             })
//   //             if (user) {
//   //                 //compare password
//   //                 const check = await bcrypt.compareSync(password, user.password)
//   //                 if (check) {
//   //                     userData.errCode = 0
//   //                     userData.errMessage = `OK`
//   //                     delete user.password
//   //                     userData.userInfo = user
//   //                 }
//   //                 else {
//   //                     userData.errCode = 3
//   //                     userData.errMessage = `wrong password`
//   //                 }
//   //             }
//   //             else {
//   //                 userData.errCode = 2
//   //                 userData.errMessage = `User not found`
//   //                 //return error

//   //             }
//   //         }
//   //         else {
//   //             userData.errCode = 1
//   //             userData.errMessage = `Your email isn't is exist in system. Please try another email !!!`
//   //             //return error

//   //         }
//   //         resolve(userData)
//   //     } catch (err) {
//   //         reject(err)
//   //     }
//   // })
// };
// const checkUserEmail = async (userEmail) => {
//   try {
//     const db = await getDB();
//     console.log();
//     const [rows, fields] = await db.query(
//       `SELECT * FROM tbluser WHERE email='${userEmail}' LIMIT 1`
//     );
//     return rows.length > 0;
//   } catch (err) {
//     console.log(err);
//     throw new Error(err);
//   }
// };
