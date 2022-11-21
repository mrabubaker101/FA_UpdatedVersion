 
using System.IO; 

namespace FA_Solutions.AdvanceLibrary.Toolkitz
{
    public static partial class Strings
    {
        public static string FileToStr(string cFileName)
        {
            //Create a StreamReader and open the file
            StreamReader oReader = System.IO.File.OpenText(cFileName);

            //Read all the contents of the file in a string
            string lcString = oReader.ReadToEnd();

            //Close the StreamReader and return the string
            oReader.Close();
            return lcString;
        }

        public static string PadL(string cExpression, int nResultSize, char cPaddingChar)
        {
            if (cExpression.Length > nResultSize)
            {
                cExpression = cExpression.Substring(0, nResultSize);
            }
            return cExpression.PadLeft(nResultSize, cPaddingChar);
        }


    }
}
