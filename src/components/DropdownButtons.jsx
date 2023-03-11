function DropdownButtons({ title, filters }) {
    return (
        <div class="btn-group ms-3" role="group">
            <button
                type="button"
                class="btn btn-primary dropdown-toggle rounded"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="btn-filter"
            >
                {title}
            </button>
            <ul class="dropdown-menu">
                {filters.map((filter, key) => {
                    return (
                        <div key={key}>
                            <li>
                                <a
                                    class="dropdown-item"
                                    href="#"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <span style={{ flexGrow: 1 }}>
                                        {filter.title}
                                    </span>
                                    <p
                                        id="filter-value"
                                        className="rounded-pill mt-3"
                                    >
                                        {filter.value}
                                    </p>
                                </a>
                            </li>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default DropdownButtons;
