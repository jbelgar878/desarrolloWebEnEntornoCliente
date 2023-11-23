const tasksAll =
    {
        "tasksList": [
            {
                "assignedTo": "Jon",
                "task": "Task_1",
                "duration": 20,
                "break": 5
            },
            {
                "assignedTo": "Doe",
                "task": "Task_2",
                "duration": 15,
                "break": 3
            },
            {
                "assignedTo": "Foo",
                "task": "Task_3",
                "duration": 60,
                "break": 15
            },
            {
                "assignedTo": "Jan",
                "task": "Task_4",
                "duration": 60,
                "break": 15
            },
            {
                "assignedTo": "Bar",
                "task": "Task_5",
                "duration": 60,
                "break": 15
            },
            {
                "assignedTo": "Fell",
                "task": "Task_6",
                "duration": 60,
                "break": 15
            }

        ]
    };


/* -------------- SCRIPT -------------- */


    let globalSeconds = 0;
    let globalMinutes = 0;
    let containerIn = document.getElementById("containerIn");
    let containerTimer = document.getElementById("containerTimer");

    function getUnitsTime() {
        globalSeconds++;
        if (globalSeconds === 59) {
            globalSeconds = 0;
            globalMinutes++;
        }
    }

    function showTimer() {
        containerTimer.textContent = String(globalMinutes).padStart(2, '0') + ":" + String(globalSeconds).padStart(2, '0');
    }

    function showDecTime(secondsDue, secondsPassed=0) {
        let secondsRem = secondsDue*60 - secondsPassed;
        let minutes = Math.floor(secondsRem / 60);
        let secmin = secondsRem % 60;
        return String(minutes).padStart(2, '0') + ":" + String(secmin).padStart(2, '0');
    }

    function createDiv(task) {
        return `<div class="col border border-1  border-success"><h1>${task.assignedTo}</h1><div class="row">
                <div class="col">${task.task}</div>
                <div class="col">${task.mDurationF}</div>
                <div class="col">${task.mBreakF}</div></div></div>`;
    }

    function walkPeople(tasksAssigned) {
        let divIn="";
        for (let task of tasksAssigned) {
            task.secondsTask = 0;
            task.secondsBreak = 0;
            task.mBreakF = showDecTime(task.break);
            task.mDurationF  =  showDecTime(task.duration);
            divIn+=createDiv(task);
        }
        containerIn.innerHTML=divIn;
    }

    function updateBreakTime(tasksAssigned) {
        if (tasksAssigned.secondsBreak < tasksAssigned.break * 60 ) {
            tasksAssigned.secondsBreak++;
            tasksAssigned.mBreakF =showDecTime(tasksAssigned.break, tasksAssigned.secondsBreak);
        } else {
            tasksAssigned.mBreakF ="time's up";
        }
    }

    function updateTaskTime(tasksAssigned) {
        if (tasksAssigned.secondsTask < tasksAssigned.duration * 60) {
            tasksAssigned.secondsTask++;
            tasksAssigned.mDurationF  =  showDecTime(tasksAssigned.duration, tasksAssigned.secondsTask);
        } else {
            tasksAssigned.mDurationF = "done";
            updateBreakTime(tasksAssigned);
        }
    }
    function updateTimes() {
        getUnitsTime();
        showTimer();
        let divIn="";
        for (let task of tasksAll.tasksList) {
            updateTaskTime(task);
            divIn+=createDiv(task);
        }
        containerIn.innerHTML=divIn;
    }

    window.onload = function () {
        let timer;
        btStart.onclick = function () {
            console.time("monitors");
            timer = setInterval(updateTimes, 1000);
          //  document.getElementById("btStart").disabled = true;
            $('#btStart').attr('disabled', true);
        };
        btStop.onclick = function () {
            clearInterval(timer);
            console.timeEnd("monitors");
            //document.getElementById("btStart").disabled = false;
            $('#btStart').attr('disabled', false);


        }
        console.time("load");
        walkPeople(tasksAll.tasksList);
        console.timeEnd("load");
    }