import { useState, useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SlOptionsVertical } from "react-icons/sl";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import filterBy from "../../assets/icons/filterby.svg";
import eye from "../../assets/icons/eye.svg";
import blacklist from "../../assets/icons/blacklist.svg";
import activate from "../../assets/icons/activate_user.svg";
import { formatShortDate } from "../../utilities/functions";
import ExtraTab from "../../pages/Users/UserDetails/Tabs/ExtraTab";
import HorizontalFlexWithIcon from "../UI/FlexItem/HorizontalFlexWithIcon";
import OptionsModal from "../OptionModal/OptionModal";
import Icon from "../Icon/Icon";
import FilterableSidebar from "./FilterableSidebar";
import PaginationControls from "./PaginationControls";
import styles from "./Table.module.scss";

const ITEMS_PER_PAGE = 9;
const MAX_PAGES_TO_DISPLAY = 5;

const SortableTable = ({ data }: { data: any[] }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const organizations = useMemo(() => data.map((obj) => obj?.orgName), [data]);
  const statuses = useMemo(() => data.map((obj) => obj?.status), [data]);
  const [searched, setSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [stateData, setStateData] = useState(data);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(1);
  const [activeRow, setActiveRow] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const totalPages = Math.ceil(stateData.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    setShowFilter(false);
  };

  const headers: { key: string; label: string }[] = [
    { key: "orgName", label: "ORGANIZATION" },
    { key: "userName", label: "USERNAME" },
    { key: "email", label: "EMAIL" },
    { key: "phoneNumber", label: "PHONE NUMBER" },
    { key: "createdAt", label: "DATE JOINED" },
    { key: "status", label: "STATUS" },
  ];

  const startIndex = useMemo(
    () => (currentPage - 1) * ITEMS_PER_PAGE,
    [currentPage, ITEMS_PER_PAGE]
  );
  const pageItems = useMemo(
    () => stateData.slice(startIndex, startIndex + ITEMS_PER_PAGE),
    [startIndex, startIndex, ITEMS_PER_PAGE, stateData]
  );
  useEffect(() => {
    let currentStatePage = location.state?.currentPage;
    currentStatePage && setCurrentPage(currentStatePage);
    navigate(location.pathname, { replace: true });
  }, [location.state]);

  useEffect(() => {
    if (totalPages <= MAX_PAGES_TO_DISPLAY) {
      setStartPage(1);
      setEndPage(totalPages);
    } else {
      const maxPagesBeforeCurrentPage = Math.floor(MAX_PAGES_TO_DISPLAY / 2);
      const maxPagesAfterCurrentPage = Math.ceil(MAX_PAGES_TO_DISPLAY / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        setStartPage(1);
        setEndPage(MAX_PAGES_TO_DISPLAY);
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        setStartPage(totalPages - MAX_PAGES_TO_DISPLAY + 1);
        setEndPage(totalPages);
      } else {
        setStartPage(currentPage - maxPagesBeforeCurrentPage);
        setEndPage(currentPage - maxPagesBeforeCurrentPage);
      }
    }
  }, [currentPage]);
  const handleViewDetails = (id: string) => {
    navigate("/user_details", { state: { id, currentPage } });
  };

  const handleFilter = (params: any) => {
    setSearched(true);
    let filterData = data;
    for (var key in params) {
      if (params[key] != "") {
        filterData = filterData.filter((d) => {
          return d[key] == params[key];
        });
      }
    }
    setStateData(filterData);
    setShowFilter(false);
  };
  const resetData = () => {
    setStateData(data);
    setShowFilter(false);
    setSearched(false);
  };

  return (
    <div>
      <div
        className={styles.tableContainer}
        style={{ height: pageItems.length < 9 ? "100vh" : "" }}
      >
        {searched && <HiOutlineArrowNarrowLeft onClick={() => resetData()} />}
        <div className={styles.filterHeader}>
          <p onClick={() => setShowFilter(true)}>
            <Icon src={filterBy} />
          </p>
        </div>
        <table>
          <thead>
            <tr className={styles.tableHeaderRow}>
              {headers.map((row) => {
                return (
                  <td key={row.key} className={styles.tableHeaderColumn}>
                    <div>
                      {row.label}
                      <p onClick={() => setShowFilter(true)}>
                        <Icon src={filterBy} />
                      </p>
                    </div>
                  </td>
                );
              })}
            </tr>
          </thead>
          {stateData?.length ? (
            <tbody>
              {pageItems.map((person, index) => {
                return (
                  <tr key={person.id}>
                    <td data-label="Organization">{person.orgName}</td>
                    <td data-label="Username">{person.userName}</td>
                    <td data-label="Email">{person.email}</td>
                    <td data-label="Phone Number">{person.phoneNumber}</td>
                    <td data-label="Date Joined">
                      {formatShortDate(person.createdAt)}
                    </td>
                    <td data-label="Status">
                      <div
                        className={`${
                          person.status == "Pending"
                            ? styles.pending
                            : person.status == "Inactive"
                            ? styles.inactive
                            : person.status == "Active"
                            ? styles.active
                            : styles.blacklisted
                        }`}
                      >
                        {person.status}
                      </div>
                    </td>
                    <td>
                      <SlOptionsVertical
                        cursor="pointer"
                        onClick={() => setActiveRow(person.id)}
                      />

                      <OptionsModal
                        style={{
                          bottom: index == pageItems.length - 1 ? 0 : undefined,
                        }}
                        open={activeRow == person.id && activeRow != ""}
                        close={() => setActiveRow("")}
                        options={[
                          <HorizontalFlexWithIcon
                            text="View Details"
                            title
                            icon={eye}
                            onClick={() => handleViewDetails(person.id)}
                          />,
                          <HorizontalFlexWithIcon
                            text="Blacklist User"
                            title
                            icon={blacklist}
                            onClick={() => {}}
                          />,
                          <HorizontalFlexWithIcon
                            text="Activate User"
                            title
                            icon={activate}
                            onClick={() => {}}
                          />,
                        ]}
                        onOptionsChange={() => {}}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <ExtraTab message="No results found" applyMargin />
          )}
          {showFilter && (
            <FilterableSidebar
              open={showFilter}
              close={() => resetData()}
              organizations={organizations}
              statuses={statuses}
              filterByParam={(val) => handleFilter(val)}
            />
          )}
        </table>
      </div>

      <PaginationControls
        pagesLength={stateData.length}
        totalLength={data.length}
        currentPage={currentPage}
        totalPages={totalPages}
        startPage={startPage}
        endPage={endPage}
        onPageChange={(page: number) => handlePageChange(page)}
      />
    </div>
  );
};

export default SortableTable;
