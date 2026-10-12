
function ExpenseTracker({expenses}){

    const allExpenses = expenses.map((exp) => (
        <div className="col-12 col-sm-6 col-lg-4" key={exp.id}>
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h3>{exp.name}</h3>
                    <h5>Amount: {exp.amount}</h5>
                    <h5>Category: {exp.category}</h5>
                    <h5>Status: 
                        <span className={exp.amount >= 2000 ? "text-success":"text-danger"}>
                            {exp.amount >= 2000 ? "High":"Low"}
                        </span>
                    </h5>
                </div>
            </div>
        </div>
    ))

    const highExpenses = expenses.filter((exp) => exp.amount >= 2000)
    const displayHighExpenses = highExpenses.map((dis) => (
        <div className="col-12 col-sm-6 col-lg-4" key={dis.id}>
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h3>{dis.name}</h3>
                    <h5>Amount: {dis.amount}</h5>
                    
                </div>
            </div>
        </div>
    ))

    const lowExpenses = expenses.filter((exp) => exp.amount < 2000)
    const displayLowExpenses = lowExpenses.map((dis) => (
        <div className="col-12 col-sm-6 col-lg-4" key={dis.id}>
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h3>{dis.name}</h3>
                    <h5>Amount: {dis.amount}</h5>
                </div>
            </div>
        </div>
    ))

    const totalOfExpenses = expenses.reduce((acc,exp) => acc + exp.amount,0)

    return(
        <div className="container bg-dark p-5">
            <h2 className="mb-4 text-white">Expenses</h2>
            <section>
                <div className="row g-4">
                    {allExpenses}
                </div>
            </section>

            <section>
                <h2 className=" mb-4 mt-4 text-white">High Expenses</h2>
                <div className="row g-4">
                    {displayHighExpenses}
                </div>
            </section>

            <section>
                <h2 className=" mb-4 mt-4 text-white">Low Expenses</h2>
                <div className="row g-4">
                    {displayLowExpenses}
                </div>
            </section>

            <section>
                <h2 className=" mb-4 mt-4 text-white">Total of Expenses</h2>
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                        <div className="fw-bold">
                         Ksh: {totalOfExpenses}
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    )
}
export default ExpenseTracker