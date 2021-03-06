import makeElement from "../../utils/makeElement";

const editForm = function (id, category, description, status, startDate, startTime, endDate, endTime) {
    //Edit Section
    const template = `
    <form  id="editForm" class="form">
        <div>
            <input type="hidden" id="todoID" name="todoID" value=${id} >
        </div>
        <div class="flex large">
            <div>
                <label for="Description">Task Description</label>
                <input type="text" id="Description" name="Description" value="${description}" required>
            </div>
        </div>
        <div class="flex uneven">          
            <div>
                <label for="Category">Category</label>
                <select name="Category" id="Category" required >
                    <option value="">Select Category</option>
                    <option value="work">Work</option>
                    <option value="school">School</option>
                    <option value="friends">Friends</option>
                    <option value="family">Family</option>
                    <option value="health">Health</option>
                </select>
            </div>
            <div>
                <label for="Status">Done</label>
                <input type="checkbox" id="Status" name="Status">
            </div>
        </div>
        <div class="flex">
            <div>
                <label for="StartDate">Start Date</label>
                <input type="date" id="StartDate" name="StartDate" value=${startDate} required>
            </div>
            <div>
                <label for="StartTime">Start Time</label>
                <input type="time" id="StartTime" name="StartTime" value=${startTime} required>
            </div>
        </div>

        <div class="flex">
            <div>
                <label for="EndDate">End Date</label>
                <input type="date" id="EndDate" name="EndDate" value=${endDate} required>
            </div>
            <div>
                <label for="EndTime">End Time</label>
                <input type="time" id="EndTime" name="EndTime" value=${endTime} required>
            </div>
        </div>

        <div>
            <p class="error"></p>
        </div>
    </form>
    `
    const form = makeElement(template);
    form.querySelector('#Category').value = category;
    form.querySelector('#Status').checked = status;

    //Buttons
    const buttonTemplate = `
     <div class="buttons">
         <button class="cancel" type="button">Cancel</button>
         <button class="edit" type="submit">Save</button>
     </div> 
     `
    form.appendChild(makeElement(buttonTemplate));
    
    return form;
}

const addForm = function(id) {
        //Add Section
        const template = `
        <form  id="addForm" class="form">
            <div>
                <input type="hidden" id="todoID" name="todoID" value=${id} >
            </div>
            <div class="flex large">
                <div>
                    <label for="Description">Task Description</label>
                    <input type="text" id="Description" name="Description" placeholder="What would you like to do?" required>
                </div>           
            </div>
            <div class="flex uneven">              
                <div>
                    <label for="Category">Category</label>
                    <select name="Category" id="Category" required >
                        <option value="">Select Category</option>
                        <option value="work">Work</option>
                        <option value="school">School</option>
                        <option value="friends">Friends</option>
                        <option value="family">Family</option>
                        <option value="health">Health</option>
                    </select>
                </div>
                <div>
                    <label for="Status">Done</label>
                    <input type="checkbox" id="Status" name="Status">
                </div>
            </div>
            
            <div class="flex">
                <div>
                    <label for="StartDate">Start Date</label>
                    <input type="date" id="StartDate" name="StartDate" placeholder="Enter Start Date" required>
                </div>
                <div>
                    <label for="StartTime">Start Time</label>
                    <input type="time" id="StartTime" name="StartTime" placeholder="Enter Start Time" required>
                </div>
            </div>
    
            <div class="flex">
                <div>
                    <label for="EndDate">End Date</label>
                    <input type="date" id="EndDate" name="EndDate" placeholder="Enter End Date" required>
                </div>
                <div>
                    <label for="EndTime">End Time</label>
                    <input type="time" id="EndTime" name="EndTime" placeholder="Enter End Time" required>
                </div>
            </div>

            <div>
                <p class="error"></p>
            </div>
        </form>
        `
        const form = makeElement(template);
    
        //Buttons
        const buttonTemplate = `
         <div class="buttons">
             <button class="cancel" type="button">Cancel</button>
             <button class="add" type="submit">Save</button>
         </div> 
         `
        form.appendChild(makeElement(buttonTemplate));
        
        return form;

}

export default editForm;
export {addForm};

