Multer is a powerful Node.js middleware specifically designed to handle multipart/form-data, which is the standard format used for uploading files 
express by default reads req.body in JSON for the uploaded files we require MULTER 

Below is a comprehensive overview of how to implement file uploads using Node.js and Multer.

1. Frontend Configuration
To upload a file from a website, you must create an HTML form with specific attributes.
Form Attributes: The form must use the POST method and include the attribute enctype="multipart/form-data"
. Without this encryption type, files will not be uploaded correctly

Input Field: You need an <input> element with type="file" and a name attribute (e.g., name="profileImage") which Multer uses to identify the file on the backend

2. Basic Multer Setup
To start, you must install the package via npm install multer and import it into your project

Simple Destination: You can initialize Multer with a basic destination folder using const upload = multer({ dest: 'uploads/' })

Middleware Usage: In your Express route, you apply this as middleware. For a single file, you use upload.single('fieldName')

Limitations: While simple, this method often saves files without extensions, making them unreadable or "corrupt" in appearance until manually fixed

3. Mastering Custom Disk Storage
For full control over how files are stored, you should use Disk Storage
 This allows you to define:
Destination: A function that specifies exactly which folder the file should be saved in
. You must ensure this folder exists, as Multer may not always create it automatically

Filename: A function that determines the name of the saved file
. It is highly recommended to generate unique filenames by appending the current timestamp (Date.now()) to the original filename to prevent users from accidentally overwriting files with the same name

4. Handling Multiple Files
Multer is flexible and can handle various upload scenarios beyond single files:
Multiple Fields: If you have different types of files (like a "profile image" and a "cover image"), you can use upload.fields() and pass an array of the field names
.
Multiple Files in One Field: If a user is uploading an array of photos to a single field, you can use upload.array()

5. Managing Uploaded Data
Once a file is successfully processed by the middleware, information about the file is available in the req.file (for single uploads) or req.files (for multiple uploads) object
.
File Path: You can access the path property of the file object to store the location in your database
.
Retrieval: When you need to display or download the file later, you can use that stored path to serve the file to the user