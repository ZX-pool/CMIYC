package com.external.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class SearchResponse {

    private final boolean isError;
    private final String errorMessage;
    private final List<PersonData> data;

    public static SearchResponse success(List<PersonData> data) {
        return new SearchResponse(false, null, data);
    }

    public static SearchResponse error(String errorMessage) {
        return new SearchResponse(true, errorMessage, null);
    }
}
