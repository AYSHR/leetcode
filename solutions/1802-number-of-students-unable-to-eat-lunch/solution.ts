function countStudents(students: number[], sandwiches: number[]): number {
   const count = [0, 0];

   for( const student of students ) count[student]++;

   for ( const sandwich of sandwiches ) {
     if ( count[sandwich] === 0 ) {
        return count[0] + count[1];
     }
     count[sandwich]--;
   }
   return 0;
};
