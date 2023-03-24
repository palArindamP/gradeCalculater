const btn = document.getElementById('btn');

    let sum = 0;
    let overallGrade = 0;
    let finalGrade = '';
    btn.addEventListener('click', function(event){
        let eng = document.getElementById('mark_english').value;
        let mat = document.getElementById('mark_math').value;
        let phy = document.getElementById('mark_physics').value;
        let chem = document.getElementById('mark_chemistry').value;
        let com = document.getElementById('mark_computer').value;

        let total = document.getElementById('total');
        let average = document.getElementById('average');
        let grade = document.getElementById('grade');

       
        if(eng > 100 || eng < 0 || mat > 100 || mat < 0 || phy > 100 || phy < 0 || chem > 100 || chem < 0 || com > 100 || com > 0){
            alert("Please Enter Marks in Range of 100")
        }else if(eng == "" || mat == "" || phy == "" || chem == "" || com == ""){
             document.getElementById('grade').innerText = `Your grade is failed`;
        }else if(eng < 35 || mat < 35 || phy < 35 || chem < 35 || com < 35){
              document.getElementById('grade').innerText = `Your grade is failed`;
        }else {
            sum = parseInt(eng + mat + phy + chem + com);
            overallGrade = (sum / 500) * 100;
             finalGrade = '';
            if(overallGrade > 90){
                finalGrade = 'A';
            }else if (overallGrade >= 80 && overallGrade <= 89){
                finalGrade = 'B';
            }else if (overallGrade >= 70 && overallGrade <= 79){
                finalGrade = 'C';
            }else if (overallGrade >= 60 && overallGrade <= 69){
                finalGrade = 'D';
            }else{
                finalGrade = 'F';
            }

            total.innerText = `Total Marks: ${sum}`;
            average.innerText = `Your Average Marks Are: ${overallGrade}`;
            grade.innerText = `Your Grade Is: ${finalGrade}`;
        }
    })
</script>
