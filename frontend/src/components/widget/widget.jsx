import styled from "styled-components";
import "./widget.css"


export function Widget(){
    return (
      <>
        <div id="modal">
          <div id="inner_modal">
            <textarea
              placeholder="Note..."
              id="user_input"
              maxlength="160"
            ></textarea>
            <i class="far fa-times-circle" id="hide"></i>
          </div>
        </div>

        <main>
          <header>
            <div class="container">
              <div id="header">
                <h1>
                  <i class="fas fa-sticky-note"></i> Sticky Notes
                </h1>
                <button id="add_note">Add Note</button>
              </div>
            </div>
          </header>

          <section>
            <div class="container">
              <div id="all_notes"></div>
            </div>
          </section>
        </main>
      </>
    );
}

